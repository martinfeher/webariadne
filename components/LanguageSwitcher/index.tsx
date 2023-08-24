export default function LanguageSwitcher() {
    return (
      <div className="text-[13px] text-gray-700">
        <select>
          <option value='en'>English</option>
          <option value='sk'>Slovak</option>
          <option value='cz'>Czech</option>
          <option value='de'>German</option>
        </select>
      </div>
    );
  }