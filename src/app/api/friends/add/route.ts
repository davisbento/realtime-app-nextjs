import { fetchRedis } from '@/helpers/redis';
import { authOptions } from '@/lib/auth';
import { addFriendValidator } from '@/lib/validations/add-friend';
import { getServerSession } from 'next-auth';

export async function POST(req: Request) {
	try {
		const session = await getServerSession(authOptions);

		if (!session) {
			return new Response('Unauthorized', {
				status: 401
			});
		}

		const body = await req.json();

		const { email: emailToAdd } = addFriendValidator.parse(body.email);

		const idToAdd = await fetchRedis('get', `user:email:${emailToAdd}`);

		if (!idToAdd) {
			return new Response('User not found', {
				status: 404
			});
		}

		if (idToAdd === session.user.id) {
			return new Response('You can not add yourself as a friend', {
				status: 400
			});
		}
	} catch (err) {}
}
