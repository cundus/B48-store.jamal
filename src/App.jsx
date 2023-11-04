import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./store/user/action";
import {
   Box,
   Typography,
   Container,
   Card,
   CardActionArea,
   CardContent,
} from "@mui/material";
// import Modal from "./components/Modal";
// import { Rating } from "react-simple-star-rating";

const App = () => {
   const [open, setOpen] = useState(false);
   const stateUser = useSelector((state) => state.user);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getUser());
   }, []);

   console.log(stateUser);

   if (stateUser.loading) {
      return <div>Loading</div>;
   }

   return (
      <Container sx={{}}>
         <Typography>Hello</Typography>
         <Box
            width={"100%"}
            height={"100%"}
            display={"flex"}
            flexWrap={"wrap"}
            gap={2}
         >
            {stateUser.data?.map((item) => (
               <Card sx={{ minWidth: 250, flex: "1 1" }} key={item.id}>
                  <CardActionArea>
                     <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Lizards are a widespread group of squamate reptiles,
                           with over 6,000 species, ranging across all
                           continents except Antarctica
                        </Typography>
                     </CardContent>
                  </CardActionArea>
               </Card>
            ))}
         </Box>
      </Container>
   );
};

export default App;
