import { neon } from '@neondatabase/serverless';

function getDatabase() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error('DATABASE_URL belum dikonfigurasi.');
  }

  return neon(databaseUrl);
}

// GET: mengambil ucapan dari database
export async function GET() {
  try {
    const sql = getDatabase();

    const wishes = await sql`
      SELECT id, name, message, created_at
      FROM birthday_wishes
      ORDER BY created_at DESC
      LIMIT 100
    `;

    return Response.json({ data: wishes });
  } catch (error) {
    console.error('Get wishes error:', error);

    return Response.json(
      { message: 'Gagal mengambil daftar ucapan.' },
      { status: 500 }
    );
  }
}

// POST: menyimpan ucapan baru
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = typeof body.name === 'string' ? body.name.trim() : '';

    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!name || name.length > 60) {
      return Response.json(
        { message: 'Nama wajib diisi, maksimal 60 karakter.' },
        { status: 400 }
      );
    }

    if (!message || message.length > 500) {
      return Response.json(
        { message: 'Ucapan wajib diisi, maksimal 500 karakter.' },
        { status: 400 }
      );
    }

    const sql = getDatabase();

    const result = await sql`
      INSERT INTO birthday_wishes (name, message)
      VALUES (${name}, ${message})
      RETURNING id, name, message, created_at
    `;

    return Response.json(
      {
        message: 'Ucapan berhasil disimpan!',
        data: result[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Save wish error:', error);

    return Response.json(
      { message: 'Gagal menyimpan ucapan. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}
