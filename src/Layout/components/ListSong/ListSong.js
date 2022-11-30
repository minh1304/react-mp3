import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListSong() {
    return (
        <div className="col-span-2 ">
            <table className="table-auto w-full">
                <thead className="text-white h-12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[10%]">Author</th>
                        <th className="w-[10%]">
                            <FontAwesomeIcon icon={faDownload}/>
                        </th>
                    </tr>
                </thead>
                <tbody className="text-slate-200">
                    <tr>
                        <td className="text-center">1</td>
                        <td>1</td>
                        <td className="text-center">1</td>
                        <td className="text-center">1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ListSong;
