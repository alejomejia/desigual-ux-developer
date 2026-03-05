/** biome-ignore-all lint/suspicious/noArrayIndexKey: There is no need to add complex keys for the table cells */

type TableProps = {
  data: {
    headers: string[],
    rows: string[][]
  }
}

export function Table({ data }: TableProps) {
  const { headers, rows } = data

  return (
    <table className="w-full border-collapse text-xs">
      <thead className="border-b border-brand-black h-9.5">
        <tr>
          {headers.map(h => <th key={h} className="font-normal">{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-brand-gray-200 h-9.5 text-center">
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>)
}