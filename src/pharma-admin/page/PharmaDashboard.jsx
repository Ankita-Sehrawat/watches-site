import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import CustomLoader from '../../components/CustomLoader';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Stack,
  Divider
} from '@mui/material';

import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const PharmaDashboard = () => {
  const [totalUsers, setTotalUsers] = useState({ totalAdmins: 0, createdDates: [] });
  const [totalOrders, setTotalOrders] = useState({ totalOrders: 0 });
  const [totalProducts, setTotalProducts] = useState({ total: 0 });
  const [loading, setLoading] = useState(true);

  const groupUsersByDate = (createdDates) => {
    const dateMap = {};
    createdDates.forEach(({ createdAt }) => {
      const date = new Date(createdAt).toISOString().split('T')[0];
      dateMap[date] = (dateMap[date] || 0) + 1;
    });
    const sortedDates = Object.keys(dateMap).sort();
    return {
      labels: sortedDates,
      counts: sortedDates.map(date => dateMap[date])
    };
  };

  const { labels: lineLabels, counts: lineCounts } = groupUsersByDate(totalUsers.createdDates || []);

  const lineChartData = {
    labels: lineLabels,
    datasets: [{
      label: 'Users Signed Up',
      data: lineCounts,
      fill: false,
      borderColor: '#1976d2',
      backgroundColor: '#1976d2',
      tension: 0.3
    }]
  };

  const barChartData = {
    labels: ['Users', 'Orders', 'Products'],
    datasets: [{
      label: 'Totals',
      data: [totalUsers.totalAdmins, totalOrders.totalOrders, totalProducts.total],
      backgroundColor: ['#42a5f5', '#ef5350', '#66bb6a']
    }]
  };

  const StatCard = ({ icon, title, value, color }) => (
    <Paper elevation={4} sx={{ display: 'flex', alignItems: 'center', p: 2, borderLeft: `6px solid ${color}`, height: '100%' }}>
      <Box mr={2}>{icon}</Box>
      <Box>
        <Typography variant="subtitle2" color="textSecondary">{title}</Typography>
        <Typography variant="h5" fontWeight="bold">{value}</Typography>
      </Box>
    </Paper>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 5, backgroundColor: '#f9f9fb', borderRadius: 2 }}>
      {loading ? (
        <CustomLoader />
      ) : (
        <>
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
            Pharma Admin Dashboard
          </Typography>

          {/* Stat Cards */}
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid item xs={12} sm={6} md={4}>
              <StatCard
                icon={<GroupIcon fontSize="large" color="primary" />}
                title="Total Users"
                value={totalUsers.totalAdmins}
                color="#1976d2"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <StatCard
                icon={<InventoryIcon fontSize="large" sx={{ color: '#388e3c' }} />}
                title="Total Products"
                value={totalProducts.total}
                color="#66bb6a"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <StatCard
                icon={<ShoppingCartIcon fontSize="large" sx={{ color: '#d32f2f' }} />}
                title="Total Orders"
                value={totalOrders.totalOrders}
                color="#ef5350"
              />
            </Grid>
          </Grid>

          {/* Charts */}
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>User Signups Over Time</Typography>
                <Divider sx={{ mb: 2 }} />
                <Line data={lineChartData} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>Total Comparison</Typography>
                <Divider sx={{ mb: 2 }} />
                <Bar data={barChartData} />
              </Paper>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default PharmaDashboard;


