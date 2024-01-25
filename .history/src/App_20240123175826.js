import "./App.css";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage />
    </div>
  );
}

function BillInput() {}

function SelectPercentage() {}

function Output() {}

function Reset() {}
