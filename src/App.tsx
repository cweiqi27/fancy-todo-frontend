import './App.css';
import { Skeleton } from './components/ui/Skeleton';

function App() {
  return (
    <main className="bg-green-500">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </main>
  );
}

export default App;
