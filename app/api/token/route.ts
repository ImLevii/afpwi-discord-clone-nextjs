import { StreamChat } from 'stream-chat';

export async function POST(request: Request) {
  const serverClient = StreamChat.getInstance(
    'jw6cdmggfgab',
    '6hnnmjkcy5vdvn8q5zdqfvx9hu5uyjjbxau4k3222kvpaweuvttc6vguaqkq4fj9'
  );
  const body = await request.json();
  console.log('[/api/token] Body:', body);

  const userId = body?.userId;

  if (!userId) {
    return Response.error();
  }

  const token = serverClient.createToken(userId);

  const response = {
    userId: userId,
    token: token,
  };

  return Response.json(response);
}
