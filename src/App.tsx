import { AppProvider } from './app/providers';
import { AppRoutes } from './routes/root';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
