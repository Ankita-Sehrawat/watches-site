import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Package,
    Image,
    Settings,
    X
} from 'lucide-react';
import { useTheme } from '../../ThemeContext';


const PharmaSidebar = ({ onClose }) => {

    return (
        <div className={`admin-sidebar some-component ${theme}`}>
            Current theme: {theme}
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div className="sidebar-content">
                {/* Close Button for Mobile */}
                <div className="sidebar-header-mobile">
                    <h4 className="admin-sidebar-title">
                        <span className="logo-part">Admin</span> Panel
                    </h4>
                    {/* <X className="close-icon" onClick={onClose} /> */}
                    <X className="close-icon" onClick={onClose} style={{ cursor: 'pointer' }} />

                </div>

                <nav className="admin-nav">
                    <NavLink to="/pharma-admin/dashboard" className="admin-nav-link" onClick={onClose}>
                        <LayoutDashboard className="nav-icon" />
                        <span className="nav-text">Dashboard</span>
                    </NavLink>
                    <NavLink to="/pharma-admin/Category" className="admin-nav-link" onClick={onClose}>
                        <Users className="nav-icon" size={20} />
                        <span className="nav-text">Category</span>
                    </NavLink>
                    <NavLink to="/pharma-admin/subCategory" className="admin-nav-link" onClick={onClose}>
                        <Users className="nav-icon" size={20} />
                        <span className="nav-text">Sub Category</span>
                    </NavLink>
                    <NavLink to="/pharma-admin/products" className="admin-nav-link" onClick={onClose}>
                        <Package className="nav-icon" size={20} />
                        <span className="nav-text">Products</span>
                    </NavLink>
                    <NavLink to="/pharma-admin/orders" className="admin-nav-link" onClick={onClose}>
                        <Package className="nav-icon" size={20} />
                        <span className="nav-text">Orders</span>
                    </NavLink>
                    <NavLink to="/pharma-admin/banner" className="admin-nav-link" onClick={onClose}>
                        <Image className="nav-icon" size={20} />
                        <span className="nav-text">Banner</span>
                    </NavLink>
                    <NavLink to="/pharma-admin/user" className="admin-nav-link" onClick={onClose}>
                        <Users className="nav-icon" size={20} />
                        <span className="nav-text">User</span>
                    </NavLink>
                    <NavLink to="/pharma-admin/wholesale" className="admin-nav-link" onClick={onClose}>
                        <Users className="nav-icon" size={20} />
                        <span className="nav-text">Wholesale User</span>
                    </NavLink>
                    <NavLink to="/pharma-admin/prescriptions" className="admin-nav-link" onClick={onClose}>
                        <Users className="nav-icon" size={20} />
                        <span className="nav-text">Prescriptions</span>
                    </NavLink>
                    <NavLink to="/pharma-admin/settings" className="admin-nav-link" onClick={onClose}>
                        <Settings className="nav-icon" size={20} />
                        <span className="nav-text">Settings</span>
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default PharmaSidebar;

