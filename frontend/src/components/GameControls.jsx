const GameControls = ({ onHit, onStand, disabled }) => {
  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={onHit}
        disabled={disabled}
        className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg font-medium cursor-pointer shadow disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Hit
      </button>
      <button
        onClick={onStand}
        disabled={disabled}
        className="bg-red-600 hover:bg-red-500 px-5 py-2 rounded-lg cursor-pointer font-medium shadow disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Stand
      </button>
    </div>
  );
};

export default GameControls;
