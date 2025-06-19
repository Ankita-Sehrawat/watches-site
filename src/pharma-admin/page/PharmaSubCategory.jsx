import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  CircularProgress,
  Avatar,
  Card,
  CardHeader,
  CardContent
} from '@mui/material';
import { Add, Edit, Delete, Close, CloudUpload } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(3),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));

const StatusChip = styled(Chip)(({ theme, status }) => ({
  fontWeight: 600,
  backgroundColor: status === 'active'
    ? theme.palette.success.light
    : theme.palette.error.light,
  color: status === 'active'
    ? theme.palette.success.dark
    : theme.palette.error.dark,
}));

const UploadButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const PharmaSubCategory = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null,
    category_id: '',
    subCategoryvariety: '',
  });
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/user/allcategories');
      setCategories(response.data);
      setFilteredCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to fetch categories. Please try again.");
    }
    setLoading(false);
  };

  const fetchSubCategories = async () => {
    try {
      const response = await axiosInstance.get('/user/allSubcategories');
      setSubCategoryList(response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      toast.error("Failed to fetch subcategories. Please try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    fetchSubCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "subCategoryvariety") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        category_id: '',
      }));

      const filtered = categories.filter(cat => cat.variety === value);
      setFilteredCategories(filtered);
    } else if (name === "image" && files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(files[0]);
      setFormData(prev => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();

    const newFormData = new FormData();
    newFormData.append('name', formData.name);
    newFormData.append('description', formData.description);
    if (formData.image) {
      newFormData.append('image', formData.image);
    }
    newFormData.append('category_id', formData.category_id);
    newFormData.append('subCategoryvariety', formData.subCategoryvariety);

    try {
      if (editingId) {
        await axiosInstance.put(`/user/updateSubCategory/${editingId}`, newFormData);
        toast.success("Sub Category updated successfully");
      } else {
        await axiosInstance.post('/user/createSubCategory', newFormData);
        toast.success("Sub Category created successfully");
      }

      fetchSubCategories();
      handleCloseModal();
    } catch (error) {
      console.error("Error submitting subcategory:", error);
      toast.error(error.response?.data?.message || "There was an error. Please try again.");
    }
  };

  const startEditingSubCategory = (item) => {
    const selectedVariety = item.subCategoryvariety || '';
    const filtered = categories.filter(cat => cat.variety === selectedVariety);

    setFormData({
      name: item.name,
      description: item.description,
      image: null,
      category_id: item.category_id?._id || '',
      subCategoryvariety: selectedVariety,
    });

    setImagePreview(item.image ? `${API_URL}/${item.image}` : null);
    setFilteredCategories(filtered);
    setEditingId(item._id);
    setOpenModal(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      image: null,
      category_id: '',
      subCategoryvariety: ''
    });
    setImagePreview(null);
    setEditingId(null);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    resetForm();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    resetForm();
  };

  const handleDeleteSubCategory = async (id) => {
    if (window.confirm("Are you sure you want to delete this subcategory?")) {
      try {
        await axiosInstance.delete(`/user/deleteSubCategory/${id}`);
        fetchSubCategories();
        toast.success("Subcategory deleted successfully");
      } catch (error) {
        console.error("Error deleting subcategory:", error);
        toast.error("Failed to delete subcategory. Please try again.");
      }
    }
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
         <Typography variant="h4" component="h1" gutterBottom className='fontSize25sml'>
            Pharma Sub-Categories
          </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          my: 3
        }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={handleOpenModal}
          >
            Add Sub-Category
          </Button>
        </Box>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <StyledTableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Variety</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Description</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Image</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Category</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subCategoryList.map((item) => (
                  <TableRow key={item._id} hover>
                    <TableCell>{item.subCategoryvariety || 'Unknown'}</TableCell>
                    <TableCell>{item.name || 'Unknown'}</TableCell>
                    <TableCell>{item.description || '-'}</TableCell>
                    <TableCell>
                      <Avatar
                        src={item.image ? `${API_URL}/${item.image}` : `${API_URL}/${item.category_id?.image}`}
                        alt={item.name}
                        sx={{ width: 56, height: 56 }}
                        variant="rounded"
                      />
                    </TableCell>
                    <TableCell>{item.category_id?.name || 'Unknown'}</TableCell>
                    <TableCell>
                      <StatusChip
                        label={item.deleted_at ? 'Deleted' : 'Active'}
                        status={item.deleted_at ? 'inactive' : 'active'}
                        sx={{ pointerEvents: 'none' }}
                      // onClick={() => { }}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => startEditingSubCategory(item)}
                        disabled={!!item.deleted_at}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteSubCategory(item._id)}
                        disabled={!!item.deleted_at}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </StyledTableContainer>
        )}
      </Box>

      {/* Add/Edit Sub-Category Dialog */}
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingId ? 'Edit Sub-Category' : 'Add New Sub-Category'}
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleCreateOrUpdate}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel id="variety-label">Variety</InputLabel>
                  <Select
                    labelId="variety-label"
                    id="subCategoryvariety"
                    name="subCategoryvariety"
                    value={formData.subCategoryvariety}
                    label="Variety"
                    onChange={handleInputChange}
                  >
                    <MenuItem value="" disabled>Select Variety</MenuItem>
                    <MenuItem value="Human">Human</MenuItem>
                    <MenuItem value="Veterinary">Veterinary</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    id="category_id"
                    name="category_id"
                    value={formData.category_id}
                    label="Category"
                    onChange={handleInputChange}
                    disabled={!formData.subCategoryvariety}
                  >
                    <MenuItem value="">Select Category</MenuItem>
                    {filteredCategories.map(cat => (
                      <MenuItem key={cat._id} value={cat._id}>{cat.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Sub-Category Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={12}>
                <UploadButton
                  component="label"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  startIcon={<CloudUpload />}
                >
                  Upload Image
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleInputChange}
                    hidden
                    required={!editingId}
                  />
                </UploadButton>
                {imagePreview && (
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                      src={imagePreview}
                      alt="Preview"
                      sx={{ width: 100, height: 100 }}
                      variant="rounded"
                    />
                  </Box>
                )}
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleCreateOrUpdate}
            color="primary"
            variant="contained"
            disabled={!formData.name || !formData.description || !formData.category_id || !formData.subCategoryvariety || (!formData.image && !editingId)}
          >
            {editingId ? 'Update' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default PharmaSubCategory;