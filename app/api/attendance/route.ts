import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
  try {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
      console.error('DATABASE_URL is not configured');

      return Response.json(
        { message: 'Konfigurasi database belum tersedia.' },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = typeof body.name === 'string' ? body.name.trim() : '';

    const attendance = body.status;

    const guestCount = Number(body.guestCount);

    const message = typeof body.message === 'string' ? body.message.trim() : '';

    // Validasi nama
    if (!name || name.length > 100) {
      return Response.json(
        { message: 'Nama wajib diisi (maksimal 100 karakter).' },
        { status: 400 }
      );
    }

    // Validasi status kehadiran
    if (!['yes', 'no'].includes(attendance)) {
      return Response.json(
        { message: 'Status kehadiran tidak valid.' },
        { status: 400 }
      );
    }

    // Validasi jumlah tamu
    if (attendance === 'yes' && ![1, 2, 3, 4].includes(guestCount)) {
      return Response.json(
        { message: 'Jumlah tamu tidak valid.' },
        { status: 400 }
      );
    }

    // Validasi pesan
    if (message.length > 1000) {
      return Response.json(
        { message: 'Pesan maksimal 1000 karakter.' },
        { status: 400 }
      );
    }

    const sql = neon(databaseUrl);

    const savedGuestCount = attendance === 'yes' ? guestCount : 1;

    const result = await sql`
      INSERT INTO birthday_guests (
        name,
        attendance,
        guest_count,
        message
      )
      VALUES (
        ${name},
        ${attendance},
        ${savedGuestCount},
        ${message || null}
      )
      RETURNING id, created_at
    `;

    return Response.json(
      {
        message: 'Konfirmasi kehadiran berhasil disimpan!',
        data: result[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Attendance API error:', error);

    return Response.json(
      { message: 'Terjadi kesalahan saat menyimpan data.' },
      { status: 500 }
    );
  }
}
