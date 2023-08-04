const Shimmer = () => {
  return (
    <>
      <div className="shimmerLoadingText">
        <h3>Shimmer UI loading</h3>
      </div>
      <div className="restraunt-list">
        {Array(20)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
