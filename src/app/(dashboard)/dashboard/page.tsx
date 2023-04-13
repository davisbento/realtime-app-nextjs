import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

interface Props {}

const page = async ({}: Props) => {
	const session = await getServerSession(authOptions);

	return <div>Your are logged in as {session?.user?.email ?? 'Anonymous'}</div>;
};

export default page;
