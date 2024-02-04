export default function Status({ data }) {
  if (!data.length) {
    return (
      <p className="stats">Start Adding Some Items👓 In Your Packing List📜</p>
    );
  }

  const totalItems = data.length;
  const packedItems = data.filter((data) => data.packed).length;
  const precItem = Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      {precItem === 100 ? (
        <em>You got everything! Now you are ready to go ✈</em>
      ) : (
        <em>
          You Have added {totalItems} item in your in Packing list🧳 and
          {packedItems === 0 ? (
            <em> You Have packed Nothing! Please Do your Packing </em>
          ) : (
            <em>
              {" "}
              you have already packed {packedItems} items ({precItem}%)
            </em>
          )}
        </em>
      )}
    </footer>
  );
}
