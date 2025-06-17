import React, { useEffect, useState } from 'react';


import { toast } from 'react-toastify';
import {
    Box,
    Typography,
    CircularProgress,
    Container,
    Modal,
    Backdrop,
    Fade,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Add, Delete } from '@mui/icons-material';

const PharmaBanner = () => {
    const [formData, setFormData] = useState({ image: '', banner_type: '' });
    const [showModal, setShowModal] = useState(false);
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    const bannerList = [
        { id: 1, title: "main" },
        { id: 2, title: "carousel" },
        { id: 3, title: "carousel1" },
        { id: 4, title: "carousel2" }
    ];

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleBannerSubmit = async (e) => {
        e.preventDefault();

        const selectedType = bannerList.find(b => b.id === parseInt(formData.banner_type))?.title;

        if (!selectedType || !formData.image) {
            toast.error("Please select a banner type and upload an image.");
            return;
        }

        const data = new FormData();
        data.append('type', selectedType);
        data.append('slider_image', formData.image);

    };


    const handleImageClick = (url) => {
        setSelectedImage(url);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };
    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Typography
                variant="h4"
                gutterBottom
                className='fontSize25sml'
                sx={{
                    fontWeight: 700,
                    color: 'black',
                    mb: 4,
                }}
            >
                Banner Management
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
                    // onClick={() => setShowModal(true)}
                >
                    Add Banner
                </Button>
            </Box>

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Box sx={{ mt: 4 }}>
                    <TableContainer component={Paper} sx={{ borderRadius: 2, minWidth: '900px' }}>
                        <Table>
                            <TableHead sx={{ backgroundColor: '#68171b' }}>
                                <TableRow>
                                    <TableCell><strong>Banner Type</strong></TableCell>
                                    <TableCell><strong>Image</strong></TableCell>
                                    <TableCell><strong>Actions</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {banners.map((item, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{item.type}</TableCell>
                                        <TableCell>
                                            <img
                                               src=''
                                                alt={`Banner ${i + 1}`}
                                                style={{ width: 200, height: 130, cursor: 'pointer', borderRadius: 8, objectFit: 'cover' }}
                                               
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <IconButton
                                                color="error"
                                                disabled={!!item.deleted_at}
                                            >
                                                <Delete />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}

            {/* Add Banner Modal */}
            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade in={showModal}>
                    <Box className="modal-content center_modal">
                        <h3>Add New Banner</h3>
                        <form onSubmit={handleBannerSubmit}>
                            <select
                                name="banner_type"
                                value={formData.banner_type}
                                onChange={handleInputChange}
                                required
                                className="selectCss"
                            >
                                <option value="">Select Banner Type</option>
                                {bannerList.map(item => (
                                    <option key={item.id} value={item.id}>
                                        {item.title}
                                    </option>
                                ))}
                            </select>

                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleInputChange}
                                required
                            />

                            <div className="modal-actions">
                                <button type="submit" className="btn-save">Save</button>
                                <button type="button" className="btn-cancel" 
                                // onClick={() => setShowModal(false)}
                                >Cancel</button>
                            </div>
                        </form>
                    </Box>
                </Fade>
            </Modal>

            {/* Image Preview Modal */}
            <Modal
                open={Boolean(selectedImage)}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade in={Boolean(selectedImage)}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            outline: 'none',
                        }}
                    >
                        <IconButton
                            // onClick={handleCloseModal}
                            sx={{
                                position: 'absolute',
                                top: -40,
                                right: -40,
                                backgroundColor: 'rgba(0,0,0,0.6)',
                                color: '#fff',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <img
                            src={selectedImage}
                            alt="Full Preview"
                            style={{
                                maxHeight: '90vh',
                                maxWidth: '90vw',
                                borderRadius: 12,
                                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                            }}
                        />
                    </Box>
                </Fade>
            </Modal>
        </Container>
    );
};

export default PharmaBanner;





