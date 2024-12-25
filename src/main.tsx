import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.tsx';
import { SessionProvider } from './SessionProvider.tsx';
import { store } from './store/store.ts';
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<SessionProvider>
				<RouterProvider router={router} />
			</SessionProvider>
		</Provider>
	</StrictMode>,
);
