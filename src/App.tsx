import { useState } from 'react';
import './index.css';
import SavedMain from './screens/SavedMain';
import Collections from './screens/Collections';
import CollectionDetail from './screens/CollectionDetails';
 
type Screen = 'main' | 'collections' | 'collection-detail';
 
export default function App() {
  const [screen, setScreen] = useState<Screen>('main');
 
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0b0c10]">
      {screen === 'main' && (
        <SavedMain onOpenCollections={() => setScreen('collections')} />
      )}
      {screen === 'collections' && (
        <Collections
          onBack={() => setScreen('main')}
          onOpenCollection={() => setScreen('collection-detail')}
        />
      )}
      {screen === 'collection-detail' && (
        <CollectionDetail onBack={() => setScreen('collections')} />
      )}
    </div>
  );
}
