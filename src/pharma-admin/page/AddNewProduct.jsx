import React, { useEffect, useState, useRef } from 'react'
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';


const AddNewProduct = () => {
    const { id } = useParams();
    const isEditMode = !!id;
    const navigate = useNavigate();

    const [categoryList, setCategoryList] = useState([]);
    const [subCategoryList, setSubCategoryList] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        media: [],
        retail_price: "",
        consumer_price: "",
        discount: "",
        mrp: "",
        quantity: "",
        category: "",
        productvariety: "",
        sub_category: "",
        expires_on: "",
        suitable_for: "",
        benefits: "",
        dosage: "",
        side_effects: "",
        prescription: "required",
        created_at: new Date().toISOString(),
        deleted_at: null
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const fileInputRef = useRef(null);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === "category") {
            setFormData(prev => ({ ...prev, sub_category: "" }));
            fetchSubCategories(value);
        }
    };


    const handleMediaChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        const mediaPromises = files.map(file => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve({
                        url: reader.result,
                        type: file.type.startsWith('video') ? 'video' : 'image',
                        name: file.name,
                        size: file.size,
                        file: file
                    });
                };
                reader.readAsDataURL(file);
            });
        });

        Promise.all(mediaPromises).then(newMedia => {
            setFormData(prev => ({
                ...prev,
                media: [...prev.media, ...newMedia]
            }));
        });
    };

    const removeMedia = (index) => {
        setFormData(prev => {
            const updatedMedia = [...prev.media];
            updatedMedia.splice(index, 1);
            return {
                ...prev,
                media: updatedMedia
            };
        });
    };

    const triggerFileInput = () => {
        fileInputRef.current.value = null;
        fileInputRef.current.click();
    };




    const formatFileSize = (bytes) => {
        if (bytes < 1024) return bytes + ' bytes';
        else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB';
        else return (bytes / 1048576).toFixed(2) + ' MB';
    };


    return (
        <div>
            <div className="herbal-form-container">
                <div className="herbal-form-header">
                    <h2>{isEditMode ? "Edit Product" : "Add New Product"}</h2>
                    <button type="button" className="herbal-cancel-btn" onClick={() => navigate("/pharma-admin/products")}>
                        Cancel
                    </button>
                </div>

                {isSubmitted ? (
                    <div className="herbal-success-message">
                        <p>Product submitted successfully!</p>
                        <button onClick={handleReset}>Add Another Product</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="herbal-product-form">
                        {/* Basic Information */}
                        <div className="herbal-form-section">
                            <h3>Basic Information</h3>
                            <div className="herbal-form-row">
                                <div className="herbal-form-group">
                                    <label>Product Name*</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter product name"
                                    />
                                    {errors.name && <span className="herbal-error">{errors.name}</span>}
                                </div>

                                <div className="herbal-form-group">
                                    <label>Product Media (Images/Videos)*</label>
                                    <div className="media-upload-container">
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleMediaChange}
                                            accept="image/*,video/*"
                                            multiple
                                            style={{ display: 'none' }}
                                        />
                                        <button
                                            type="button"
                                            className="media-upload-btn"
                                            onClick={triggerFileInput}
                                        >
                                            Add Media
                                        </button>
                                        <p className="media-upload-hint">Supports JPG, PNG, GIF, MP4 (Max 10MB each)</p>
                                        <div className="media-preview-container">
                                            {formData.media.length === 0 ? (
                                                <div className="no-media-placeholder">
                                                    No media selected
                                                </div>
                                            ) : (
                                                formData.media.map((media, index) => (
                                                    <div key={index} className="media-preview-item">
                                                        {media.type === 'video' ? (
                                                            <video controls>
                                                                <source src={media.url} type={`video/${media.file.name.split('.').pop()}`} />
                                                                Your browser does not support the video tag.
                                                            </video>
                                                        ) : (
                                                            <img src={media.url} alt={`Preview ${index}`} />
                                                        )}
                                                        <button
                                                            type="button"
                                                            className="remove-media-btn"
                                                            onClick={() => removeMedia(index)}
                                                            aria-label="Remove media"
                                                        >
                                                            ×
                                                        </button>
                                                        <div className="media-info">
                                                            <span className="media-name">{media.name}</span>
                                                            <span className="media-size">{formatFileSize(media.size)}</span>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="herbal-form-group">
                                    <label >Prescription</label>
                                    <select name="prescription" value={formData.prescription} onChange={handleChange} >
                                        {/* <option value="">Select Prescription</option> */}
                                        <option value="required">Required</option>
                                        <option value="Notrequired">Not Required</option>
                                    </select>
                                </div>
                            </div>

                            <div className="herbal-form-group">
                                <label>Description*</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Enter product description"
                                    rows="3"
                                />
                                {errors.description && <span className="herbal-error">{errors.description}</span>}
                            </div>
                        </div>


                        {/* Pricing Information */}
                        <div className="herbal-form-section">
                            <h3>Pricing Information</h3>
                            <div className="herbal-form-row">
                                <div className="herbal-form-group">
                                    <label>WholesalePartner Price (MRP)*</label>
                                    <input
                                        type="number"
                                        name="retail_price"
                                        value={formData.retail_price}
                                        onChange={handleChange}
                                        placeholder="Enter retail price"
                                        min="0"
                                        step="0.01"
                                    />
                                    {errors.retail_price && <span className="herbal-error">{errors.retail_price}</span>}
                                </div>

                                <div className="herbal-form-group">
                                    <label>Consumer Price*</label>
                                    <input
                                        type="number"
                                        name="consumer_price"
                                        value={formData.consumer_price}
                                        onChange={handleChange}
                                        placeholder="Enter consumer price"
                                        min="0"
                                        step="0.01"
                                    />
                                    {errors.consumer_price && <span className="herbal-error">{errors.consumer_price}</span>}
                                </div>

                                <div className="herbal-form-group">
                                    <label>Discount (%)</label>
                                    <input
                                        type="number"
                                        name="discount"
                                        value={formData.discount}
                                        onChange={handleChange}
                                        placeholder="Enter discount percentage"
                                        min="0"
                                        max="100"
                                    />
                                </div>
                            </div>

                            <div className="herbal-form-row">
                                <div className="herbal-form-group">
                                    <label>MRP</label>
                                    <input
                                        type="number"
                                        name="mrp"
                                        value={formData.mrp}
                                        onChange={handleChange}
                                        placeholder="Enter maximum retail price"
                                        min="0"
                                        step="0.01"
                                    />
                                </div>

                                <div className="herbal-form-group">
                                    <label>Quantity*</label>
                                    <input
                                        type="text"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        placeholder="e.g., 100ml, 50g"
                                    />
                                    {errors.quantity && <span className="herbal-error">{errors.quantity}</span>}
                                </div>

                                <div className="herbal-form-group">
                                    <label>Expiry Date*</label>
                                    <input
                                        type="date"
                                        name="expires_on"
                                        value={formData.expires_on}
                                        onChange={handleChange}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                    {errors.expires_on && <span className="herbal-error">{errors.expires_on}</span>}
                                </div>
                            </div>
                        </div>


                        {/* Category Information */}
                        <div className="herbal-form-section">
                            <h3>Category Information</h3>
                            <div className="herbal-form-row">
                                <div className="herbal-form-group">
                                    <label>Variety*</label>
                                    <select
                                        name="productvariety"
                                        value={formData.productvariety}
                                        onChange={(e) => {
                                            const selectedVariety = e.target.value;
                                            setFormData(prev => ({
                                                ...prev,
                                                productvariety: selectedVariety,
                                                category: "",
                                                sub_category: ""
                                            }));
                                        }}
                                        className='selectCss'
                                    >
                                        <option value="">Select Variety</option>
                                        <option value="Human">Human</option>
                                        <option value="Veterinary">Veterinary</option>
                                    </select>
                                    {errors.variety && <span className="herbal-error">{errors.variety}</span>}
                                </div>


                                <div className="herbal-form-group">
                                    <label>Category*</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Category</option>
                                        {categoryList
                                            .filter(cat => cat.variety === formData.productvariety
                                            )
                                            .map((sub, index) => (
                                                <option key={index} value={sub.name}>{sub.name}</option>
                                            ))}
                                    </select>
                                    {errors.category && <span className="herbal-error">{errors.category}</span>}
                                </div>


                                <div className="herbal-form-group">
                                    <label>Sub Category</label>
                                    <select
                                        name="sub_category"
                                        value={formData.sub_category}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select subcategory</option>
                                        {subCategoryList.map((sub, index) => (
                                            <option key={index} value={sub.name}>{sub.name}</option>
                                        ))}
                                    </select>

                                </div>

                                <div className="herbal-form-group">
                                    <label>Suitable For</label>
                                    <input
                                        type="text"
                                        name="suitable_for"
                                        value={formData.suitable_for}
                                        onChange={handleChange}
                                        placeholder="e.g., Adults, Children, All ages"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="herbal-form-section">
                            <h3>Product Details</h3>
                            <div className="herbal-form-row">
                                <div className="herbal-form-group">
                                    <label>Benefits (comma separated)</label>
                                    <textarea
                                        name="benefits"
                                        value={formData.benefits}
                                        onChange={handleChange}
                                        placeholder="Enter benefits separated by commas"
                                        rows="3"
                                    />
                                </div>

                                <div className="herbal-form-group">
                                    <label>Dosage/Usage Instructions*</label>
                                    <textarea
                                        name="dosage"
                                        value={formData.dosage}
                                        onChange={handleChange}
                                        placeholder="Enter dosage instructions"
                                        rows="3"
                                    />
                                    {errors.dosage && <span className="herbal-error">{errors.dosage}</span>}
                                </div>
                            </div>

                            <div className="herbal-form-group">
                                <label>Side Effects</label>
                                <textarea
                                    name="side_effects"
                                    value={formData.side_effects}
                                    onChange={handleChange}
                                    placeholder="Enter any known side effects"
                                    rows="2"
                                />
                            </div>
                        </div>

                        <div className="herbal-form-actions">
                            <button type="button" onClick={handleReset} className="herbal-reset-btn">
                                Reset
                            </button>
                            {/* <p>{isEditMode ? "Edit Product" : "Add New Product"}</p> */}

                            <button type="submit" className="herbal-submit-btn">
                                {isEditMode ? "Update Product" : "Submit Product"}
                            </button>

                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default AddNewProduct
