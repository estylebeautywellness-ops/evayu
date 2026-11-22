import { createRoot } from 'react-dom/client';
import Workbench from './Workbench';

const root = document.getElementById('workbench');
if (!root) throw new Error('Missing workbench container');
createRoot(root).render(<Workbench />);
