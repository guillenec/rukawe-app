import React, { useEffect } from 'react'
import ActiveIndex from '../../store/activeIndex/ActiveIndex'
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableFoot,
  TablerFooterCell,
} from '@tremor/react';

const data = [
  {
    name: 'Viola Amherd',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of Defence, Civil Protection and Sport (DDPS)',
    status: 'active',
  },
  {
    name: 'Albert Rösti',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of the Environment, Transport, Energy and Communications (DETEC)',
    status: 'active',
  },
  {
    name: 'Beat Jans',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Justice and Police (FDJP)',
    status: 'active',
  },
  {
    name: 'Ignazio Cassis',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Foreign Affairs (FDFA)',
    status: 'active',
  },
  {
    name: 'Karin Keller-Sutter',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Finance (FDF)',
    status: 'active',
  },
  {
    name: 'Guy Parmelin',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of Economic Affairs, Education and Research (EAER)',
    status: 'active',
  },
  {
    name: 'Elisabeth Baume-Schneider',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Home Affairs (FDHA)',
    status: 'active',
  },
];


const Carga = () => {
  const { setActiveIndex } = ActiveIndex()

  useEffect(() => {
    setActiveIndex(2)
  }, [])

  return (
    <div className='w-full h-screen m-auto'>
      <Card>
        <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">List of Swiss Federal Councillours</h3>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Position</TableHeaderCell>
              <TableHeaderCell>Department</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  {item.Role}
                </TableCell>
                <TableCell>
                  {item.departement}
                </TableCell>
                <TableCell>
                  <Badge color="emerald" icon={RiFlag2Line}>
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

    </div>
  )
}

export default Carga