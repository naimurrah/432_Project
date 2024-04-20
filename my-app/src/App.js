import './App.css';
import person from './images/person.jpeg';
import photo_icon from './images/photo_icon.webp';
import bio_icon from './images/bio_icon.png';
import contacts_icon from './images/contacts_icon.jpeg';

function App() {
  return (
    <div className='body'>
      <div className='hero'>
        <h1>Good morning, <br/>Ben</h1>
        <img src={person} alt='person'/>
      </div>
      <div className='main'>
        <div className='notePlusOthers'>
          <div className='note'>
            <h2>Quick Notes</h2>
            <p>Hey love, have an amazing day today.</p>
          </div>
          <div className='photoBioContacts'>
            <img src={photo_icon} alt='photo_icon'/>
            <img src={bio_icon} alt='bio_icon'/>
            <img src={contacts_icon} alt='contacts_icon'/>
          </div>
        </div>
        
        <div className='todo'>
          <h2>To-Do List</h2>
          <ul>
            <li>Buy groceries</li>
            <li>Call mom</li>
            <li>Go to the gym</li>
            <li>Finish project</li>
            <li>Read a book</li>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default App;
