import Button from '@/components/ui/Button';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

interface Props {}

const page = async ({}: Props) => {
	const session = await getServerSession(authOptions);

	return <Button>Test</Button>;
};

export default page;
