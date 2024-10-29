import { createBoard } from '@wixc3/react-board';
import { Nav } from '../../../src/components/nav/nav';

export default createBoard({
    name: 'Nav',
    Board: () => <Nav />,
});
