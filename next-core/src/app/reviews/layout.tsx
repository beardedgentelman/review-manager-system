import {ReactNode} from "react";
import {GoBackButton} from "@/components/GoBackButton";
import {Container} from "@/components/ui/Container";
import StyledComponentsRegistry from "@/lib/registry";

const ReviewUpdateLayout = ({children}: { children: ReactNode }) => {

  return (
      <StyledComponentsRegistry>
        <Container>
          {/*<GoBackButton/>*/}
          {children}
        </Container>
      </StyledComponentsRegistry>

  );
};

export default ReviewUpdateLayout;