function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicks: {count}
      </button>
      
      {/* This child has no props, no state, and never changes */}
      <StaticChild />
    </div>
  );
}

// CHILD COMPONENT
function StaticChild() {
  console.log("Child re-rendered!"); // <-- This will log EVERY time you click the button!
  return <p>I am just static text.</p>;
}