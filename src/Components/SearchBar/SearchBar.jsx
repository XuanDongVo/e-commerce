import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Trigger navigation to search results
      navigate(`/catalogsearch/result/${search}`);
      setSearch(''); // Clear the input value after navigation
    }
  };


  return (
    <>
      <div className="search-bar" 
        style={{
          margin: "0.5px",
          border: "none",
          borderBottom: "2px solid white",
          outline: "none",
          backgroundColor: "transparent", 
          display:"flex",
          alignItems:'center',
        }}
      >
        <CiSearch style={{fontSize:"1.3rem",color:'white'}}/>
        <input
          type="text"
          placeholder="Tìm kiếm "
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{background:'transparent', outline:'none',border:'none !important', color:'white' }}
        />
      </div>
      <div className="user">
        <CiUser style={{color:'white',fontSize:'2rem',cursor:'pointer'}}/>
      </div>
      <div className="heart">
        <IoIosHeartEmpty style={{color:'white',fontSize:'2rem',cursor:'pointer'}}/>
      </div>
      {/* <div className="cart">
          <IoCartOutline style={{ color: 'white', fontSize: '2rem', cursor: 'pointer' }} onClick={() => fetchCart()} />
      </div> */}
    </>
  );
};

export default SearchBar;
