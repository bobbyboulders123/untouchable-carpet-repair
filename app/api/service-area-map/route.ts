const MAP_CACHE_CONTROL =
  "public, s-maxage=86400, stale-while-revalidate=604800";

function unavailableResponse(status: 502 | 503) {
  return new Response("Service area map unavailable", {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_STATIC_API_KEY;

  if (!apiKey) {
    return unavailableResponse(503);
  }

  const mapUrl = new URL("https://maps.googleapis.com/maps/api/staticmap");
  mapUrl.searchParams.set("center", "Denver, CO");
  mapUrl.searchParams.set("zoom", "10");
  mapUrl.searchParams.set("size", "640x360");
  mapUrl.searchParams.set("scale", "2");
  mapUrl.searchParams.set("maptype", "roadmap");
  mapUrl.searchParams.set("markers", "color:0x6f1d28|label:U|Denver, CO");
  mapUrl.searchParams.set(
    "style",
    "feature:poi|element:labels|visibility:off",
  );
  mapUrl.searchParams.append(
    "style",
    "feature:road|element:geometry|color:0xffffff",
  );
  mapUrl.searchParams.append(
    "style",
    "feature:water|element:geometry|color:0xd8e2e7",
  );
  mapUrl.searchParams.append(
    "style",
    "feature:landscape|element:geometry|color:0xefe6da",
  );
  mapUrl.searchParams.set("key", apiKey);

  const mapResponse = await fetch(mapUrl);

  if (!mapResponse.ok) {
    return unavailableResponse(502);
  }

  const contentType = mapResponse.headers.get("content-type") ?? "image/png";
  const image = await mapResponse.arrayBuffer();

  return new Response(image, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": MAP_CACHE_CONTROL,
    },
  });
}
