import './App.css'
import { Images } from './components/Images'
import { PlanetCard } from './components/PlanetCard'
import { PlanetInfo } from './components/PlanetInfo'
import { planets } from './planets'
import { useState } from 'react'
import Modal from 'react-modal'

const customStyles = {
  overlay: {
    backgroundColor: null,
  },
  content: {
    border: null,
    backgroundColor: '#16171b',
  },
}

function App() {
  const [selected, setSelected] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className="app">
      <div className="system-name">Планеты солнечной системы</div>
      <div className="flex-row">
        <div className="flex-column">
          <div>
            {planets.map((planet, id) => (
              <PlanetCard id={id} planet={planet} hook={setSelected} />
            ))}
          </div>
        </div>
        <PlanetInfo planet={planets[selected]} hook={setIsOpen} />
      </div>

      <Modal
        id="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button
            className="close"
            style={{ alignSelf: 'flex-end' }}
            onClick={closeModal}
          >
            закрыть
          </button>
          <Images planet={planets[selected]} />
        </div>
      </Modal>
    </div>
  )
}

export default App
