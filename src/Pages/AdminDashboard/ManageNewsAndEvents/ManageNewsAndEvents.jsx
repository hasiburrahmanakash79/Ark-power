import useNewsAndEvents from '../../../Hooks/useNewsAndEvents';
import { Card, Typography } from '@material-tailwind/react';
import LoadingSpinner from '../../../Hooks/Loading/LoadingSpinner';

const ManageNewsAndEvents = () => {
    const {newsAndEvents, isLoading} = useNewsAndEvents();
    const TABLE_HEAD = [" ", "Name", "Date", "Category", "Action"];
    console.log(newsAndEvents);
  
    if(isLoading){
      return <LoadingSpinner/>
    }
  
    return (
      <Card className="h-full w-full">
        <h1 className="text-center text-primary font-bold text-2xl py-5">
          All News 
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left">
            <thead className="">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-2 md:p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70 text-xs md:text-base"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {newsAndEvents.map(({ imageUrl, title, date, Category}, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-2 md:p-4">
                    <div className="avatar">
                      <div className="w-20 rounded">
                        <img
                          src={imageUrl}
                          alt="Tailwind-CSS-Avatar-component"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-2 md:p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-xs md:text-base"
                    >
                      {title.slice(0,50)}
                    </Typography>
                  </td>
                  <td className="p-2 md:p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-xs md:text-base"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className="p-2 md:p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-xs md:text-base"
                    >
                      {Category}
                    </Typography>
                  </td>
                  <td className="p-2 flex gap-5 md:p-4 text-black">
                    <button className="btn bg-orange-400 p-2">Edit</button>
                    <button className="btn bg-red-400 p-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    );
};

export default ManageNewsAndEvents;