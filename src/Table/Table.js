import '../App.scss'; 
 
const Table = () => {
    return (
        <div>
            <table className='table table-test'> 
                <thead>
                    <th>
                        Ho Ten 
                    </th>
                    <th>
                        Ngay Sinh 
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Pham Van Vu
                        </td>
                        <td>
                            04-11-2002 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table; 