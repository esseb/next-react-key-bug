const categories = [
  {
    name: "a",
    subcategories: ["a0", "a1", "a2"]
  },
  {
    name: "b",
    subcategories: ["b0", "b1", "b2"]
  },
  {
    name: "c",
    subcategories: ["c0", "c1", "c2"]
  }
]

export default function App() {
  return (
    <div>
      <h1>Steps to reproduce</h1>
      <ol>
        <li>Open devtools and switch to the "Console" tab</li>
        <li>Reload this page</li>
      </ol>

      <h1>Expected result</h1>
      <p>No warnings</p>

      <h1>Actual result</h1>
      <p>client.js:1 Warning: Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.</p>

      {categories.map((category, categoryIndex) => {
        return (
          <button
            {...{
              className: 'example',
            }}
            key={categoryIndex}
          >
            <span>{category.name}</span>
            <div>
              {category.subcategories.map((subcategory, subcategoryIndex) => (
                <span key={subcategoryIndex}>{subcategory}</span>
              ))}
            </div>
          </button>
        );
      })}
    </div>
  );
}
