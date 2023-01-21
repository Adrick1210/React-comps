import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus
        malesuada finibus. Aliquam vitae turpis quis magna euismod mollis. Nam
        sed commodo risus, malesuada molestie erat. Duis vitae malesuada libero.
        Curabitur tincidunt, risus ac hendrerit interdum, nisl nulla molestie
        nunc, sit amet blandit sem est sit amet velit. Pellentesque vel semper
        dolor. Nam mattis mattis orci a ultrices. Morbi non accumsan enim. Nulla
        ut urna a felis rhoncus tempor vel eu sem. Aliquam vehicula massa at
        interdum gravida. In nec bibendum ligula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus
        malesuada finibus. Aliquam vitae turpis quis magna euismod mollis. Nam
        sed commodo risus, malesuada molestie erat. Duis vitae malesuada libero.
        Curabitur tincidunt, risus ac hendrerit interdum, nisl nulla molestie
        nunc, sit amet blandit sem est sit amet velit. Pellentesque vel semper
        dolor. Nam mattis mattis orci a ultrices. Morbi non accumsan enim. Nulla
        ut urna a felis rhoncus tempor vel eu sem. Aliquam vehicula massa at
        interdum gravida. In nec bibendum ligula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus
        malesuada finibus. Aliquam vitae turpis quis magna euismod mollis. Nam
        sed commodo risus, malesuada molestie erat. Duis vitae malesuada libero.
        Curabitur tincidunt, risus ac hendrerit interdum, nisl nulla molestie
        nunc, sit amet blandit sem est sit amet velit. Pellentesque vel semper
        dolor. Nam mattis mattis orci a ultrices. Morbi non accumsan enim. Nulla
        ut urna a felis rhoncus tempor vel eu sem. Aliquam vehicula massa at
        interdum gravida. In nec bibendum ligula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus
        malesuada finibus. Aliquam vitae turpis quis magna euismod mollis. Nam
        sed commodo risus, malesuada molestie erat. Duis vitae malesuada libero.
        Curabitur tincidunt, risus ac hendrerit interdum, nisl nulla molestie
        nunc, sit amet blandit sem est sit amet velit. Pellentesque vel semper
        dolor. Nam mattis mattis orci a ultrices. Morbi non accumsan enim. Nulla
        ut urna a felis rhoncus tempor vel eu sem. Aliquam vehicula massa at
        interdum gravida. In nec bibendum ligula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus
        malesuada finibus. Aliquam vitae turpis quis magna euismod mollis. Nam
        sed commodo risus, malesuada molestie erat. Duis vitae malesuada libero.
        Curabitur tincidunt, risus ac hendrerit interdum, nisl nulla molestie
        nunc, sit amet blandit sem est sit amet velit. Pellentesque vel semper
        dolor. Nam mattis mattis orci a ultrices. Morbi non accumsan enim. Nulla
        ut urna a felis rhoncus tempor vel eu sem. Aliquam vehicula massa at
        interdum gravida. In nec bibendum ligula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus
        malesuada finibus. Aliquam vitae turpis quis magna euismod mollis. Nam
        sed commodo risus, malesuada molestie erat. Duis vitae malesuada libero.
        Curabitur tincidunt, risus ac hendrerit interdum, nisl nulla molestie
        nunc, sit amet blandit sem est sit amet velit. Pellentesque vel semper
        dolor. Nam mattis mattis orci a ultrices. Morbi non accumsan enim. Nulla
        ut urna a felis rhoncus tempor vel eu sem. Aliquam vehicula massa at
        interdum gravida. In nec bibendum ligula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus
        malesuada finibus. Aliquam vitae turpis quis magna euismod mollis. Nam
        sed commodo risus, malesuada molestie erat. Duis vitae malesuada libero.
        Curabitur tincidunt, risus ac hendrerit interdum, nisl nulla molestie
        nunc, sit amet blandit sem est sit amet velit. Pellentesque vel semper
        dolor. Nam mattis mattis orci a ultrices. Morbi non accumsan enim. Nulla
        ut urna a felis rhoncus tempor vel eu sem. Aliquam vehicula massa at
        interdum gravida. In nec bibendum ligula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus
        malesuada finibus. Aliquam vitae turpis quis magna euismod mollis. Nam
        sed commodo risus, malesuada molestie erat. Duis vitae malesuada libero.
        Curabitur tincidunt, risus ac hendrerit interdum, nisl nulla molestie
        nunc, sit amet blandit sem est sit amet velit. Pellentesque vel semper
        dolor. Nam mattis mattis orci a ultrices. Morbi non accumsan enim. Nulla
        ut urna a felis rhoncus tempor vel eu sem. Aliquam vehicula massa at
        interdum gravida. In nec bibendum ligula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus
        malesuada finibus. Aliquam vitae turpis quis magna euismod mollis. Nam
        sed commodo risus, malesuada molestie erat. Duis vitae malesuada libero.
        Curabitur tincidunt, risus ac hendrerit interdum, nisl nulla molestie
        nunc, sit amet blandit sem est sit amet velit. Pellentesque vel semper
        dolor. Nam mattis mattis orci a ultrices. Morbi non accumsan enim. Nulla
        ut urna a felis rhoncus tempor vel eu sem. Aliquam vehicula massa at
        interdum gravida. In nec bibendum ligula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus
        malesuada finibus. Aliquam vitae turpis quis magna euismod mollis. Nam
        sed commodo risus, malesuada molestie erat. Duis vitae malesuada libero.
        Curabitur tincidunt, risus ac hendrerit interdum, nisl nulla molestie
        nunc, sit amet blandit sem est sit amet velit. Pellentesque vel semper
        dolor. Nam mattis mattis orci a ultrices. Morbi non accumsan enim. Nulla
        ut urna a felis rhoncus tempor vel eu sem. Aliquam vehicula massa at
        interdum gravida. In nec bibendum ligula.
      </p>
    </div>
  );
}

export default ModalPage;
