import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

export const Routes = (app) => {
    app.use('/users', userRoutes)
    app.use('/auth', authRoutes)
};