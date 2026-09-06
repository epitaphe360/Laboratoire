import { Navigate, Route, Routes } from 'react-router-dom';
import LabApp from './features/lab/LabApp';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/lab" replace />} />
      <Route path="/lab/*" element={<LabApp />} />
    </Routes>
  );
}
