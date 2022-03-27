

const estilo = {"backgroundcolor":"brown"}
// Header para artista

const Header = ({ images, name }) => {
  
  

  return (
        <div>
    <header className="p-5 has-text-white" style={{backgroundColor:"rgb(90,90,90)",borderRadius: 10}}>
     
      <div className="is-flex">
        
        <img
          src={images[0].url}
          alt="Artista"
          style={{ width: "256px", height: "256px" ,borderRadius: 10}}
          />
        <div className="p-4 is-flex is-flex-direction-column is-justify-content-space-around">
          <p className="is-size-1">{name}</p>
          
        </div>
      </div>
    </header>
          <br/>
                  </div>

  );
};

export default Header;
