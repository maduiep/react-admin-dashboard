import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { BASE_URL } from '../../CommonVariable'
import { productRows } from '../../commonData'

function ProductList() {

    const [data, setData] = useState(productRows)

    const handleDelete = id => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'product',
          headerName: 'Product',
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productList__item">
                <img className="productList__profile"
                  src={`${BASE_URL}/images/img-5.jpg`}
                  alt="img" 
                />
                {params.row.name}
              </div>
            )
          },
          editable: true,
        },
        {
          field: 'stock',
          headerName: 'Stock',
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
          field: 'price',
          headerName: 'Price',
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
                <Link to={'product/' + params.row.id}>
                  <button className="productList__edit">Edit</button>
                </Link>
                <DeleteOutline className="productList__delete" 
                onClick={() => handleDelete(params.row.id)}/>
              </>
            )
          }
        },
      ];

    return (
        <div className="productList">
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

export default ProductList
