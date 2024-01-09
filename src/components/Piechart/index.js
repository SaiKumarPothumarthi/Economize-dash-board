import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  {
    count: 809680,
  },
  {
    count: 4555697,
  },
  {
    count: 12345657,
  },
]

const Piechart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          cx="50%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
          fill="#2253f2"
        >
          
          <Cell name="English" fill="#cfecfa" />
        </Pie>
       
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Piechart