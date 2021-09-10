import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { BASE_URL } from '../../CommonVariable'
import { userRows } from '../../commonData'

function UserList() {

    const [data, setData] = useState(userRows)

    const handleDelete = id => {
      setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'Username',
          width: 200,
          renderCell: (params) => {
            return (
              <div className="userList__user">
                <img className="userList__profile"
                  src={`${BASE_URL}/images/img-4.jpg`}
                  alt="img" 
                />
                {params.row.username}
              </div>
            )
          },
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 250,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
          editable: true,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          sortable: false,
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          sortable: false,
          width: 160,
          renderCell: (params) => {
            return (
              <>
                <Link to={'user/' + params.row.id}>
                  <button className="userList__edit">Edit</button>
                </Link>
                <DeleteOutline className="userList__delete" 
                onClick={() => handleDelete(params.row.id)}/>
              </>
            )
          }
        },
      ];
      
      

    return (
        <div className="userList">
        <DataGrid
            rows={data}
            diableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            disableSelectionOnClick
        />
        </div>
    )
}

export default UserList
