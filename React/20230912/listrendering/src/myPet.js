import React, { useState } from 'react'

export default function App6() {
  
  const [animals, setAnimals] = useState([
    { name: "벨라", species: "고양이", age: "5", id: 111 },
    { name: "루시", species: "강아지", age: "3", id: 112 },
    { name: "데이지", species: "토끼", age: "2", id: 113 },
    { name: "몰리", species: "고양이", age: "1", id: 114 },
    { name: "매기", species: "강아지", age: "6", id: 115 }
  ]);

  const [newName, setNewName] = useState('');
  const [newSpecies, setNewSpecies] = useState('');
  const [newAge, setNewAge] = useState('');

  const handleAddAnimal = () => {
    const newAnimal = {
      name: newName,
      species: newSpecies,
      age: newAge,
      id: Date.now() // 간단하게 현재 시간으로 ID 설정
    }
    
    setAnimals(prevAnimals => [...prevAnimals, newAnimal]);
    
    // 입력 필드 초기화
    setNewName('');
    setNewSpecies('');
    setNewAge('');
  }

  return (
    <div>
      <h1>애완동물 정보 리스트</h1>
      
      <div>새로운 애완동물을 추가하세요!</div>
      <div>
        <input 
          type='text' 
          placeholder='이름' 
          value={newName} 
          onChange={e => setNewName(e.target.value)}
        />
        <input 
          type='text' 
          placeholder='species' 
          value={newSpecies} 
          onChange={e => setNewSpecies(e.target.value)}
        />
        <input 
          type='text' 
          placeholder='나이' 
          value={newAge} 
          onChange={e => setNewAge(e.target.value)}
        />
      </div>
      <button onClick={handleAddAnimal}>추가하기</button>
      <ul>
        {animals.map(animal => (
          <li key={animal.id}>
            {animal.name}는 {animal.species} 입니다. 그리고 {animal.age}살 입니다.
          </li>
        ))}
      </ul>
    </div>
  )
}
