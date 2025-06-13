
const DetailsSelection = ({ details ={}, onChange }) => {
    const handleSelectionChange = (selection, value) => {
        onChange({ ...details, [selection]: value });
    };
    
    return (
        <div className="p-4 bg-white rounded">
        <h2 className="text-xl font-semibold mb-4">Details Selection</h2>
        <div className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-700">
                Storage Option
            </label>
            <select
                value={details?.storage}
                onChange={(e) => handleSelectionChange('storage', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="64GB">64GB</option>
                <option value="128GB">128GB</option>
                <option value="256GB">256GB</option>
            </select>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">
                Color Option
            </label>
            <select
                value={details?.color}
                onChange={(e) => handleSelectionChange('color', e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="blue">Blue</option>
            </select>
            </div>
        </div>
        </div>
    );
    }

    export default DetailsSelection;