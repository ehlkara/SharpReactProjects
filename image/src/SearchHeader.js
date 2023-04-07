function SerachHeader({search}) {

    const handleFormSubmit = (event) => {
        event.preventDefault();
        search('ehlullah');
    }

  return <div className="searchDiv">
    <form onSubmit={handleFormSubmit}>
        <label>What is your search?</label>
        <input/>
    </form>
  </div>;
}

export default SerachHeader;
