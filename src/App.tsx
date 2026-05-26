
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FullViewGrid from './pages/territory/components/full-view-grid';
import { Route, Routes } from 'react-router-dom';
import AddNew from './pages/territory/components/add-new';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<FullViewGrid />} />
        <Route path="/add" element={<AddNew />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;