function App() {
  return (
    // SCORE TABLE
    <div className="flex flex-col m-auto p-3 h-screen">
      <div className="basis-1/6 text-center bg-amber-100">
        {/*HEADER: targetScore*/}
      </div>
      <div className="flex-grow flex flex-row py-3 bg-gray-200 border border-black">
        <div className="flex-grow bg-blue-400">
          {/*LEFT TABLE: player #1 name, scoretable*/}
        </div>
        <div className="flex-grow bg-green-400">
          {/*RIGHT TABLE: player #2 name, scoretable*/}
        </div>
      </div>
      <div className="basis-1/6 text-center bg-amber-500">
        {/*ACTIONS: current run score, fouls, buttons <Rerack>, <Submit Score> and <Score Correction>*/}
      </div>
    </div>
  );
}

export default App;
