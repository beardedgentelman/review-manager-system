import {ReactNode} from "react";
import {GoBackButton} from "@/components/GoBackButton";
import {Container} from "@/components/ui/Container";

const ReviewUpdateLayout = ({children}: { children: ReactNode }) => {

  return (
      <Container>
        {/*<GoBackButton/>*/}
        {children}
      </Container>
  );
};

export default ReviewUpdateLayout;