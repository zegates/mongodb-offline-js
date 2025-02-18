This is a frontend module to access mongodb offline and push data to the backend when online
And it will be a sync layer for the data

## Architecture

Frontend              SyncLayer                 MongoDB
-------               ---------                 -------
   |                      |                        |
   |                      |                        |
   |        update        |                        |
  ----------------------->
                           <---------------------->



