    export async function GET(request: NextRequest) {
    const page_str = request.nextUrl.searchParams.get("page");
    const limit_str = request.nextUrl.searchParams.get("limit");
 
    let json_response = {
      status: "success",
    };
    return NextResponse.json(json_response);
  }

  export async function POST(request: Request) {

      const json = await request.json();
    
      let json_response = {
        status: "success",
      };
      return new NextResponse(JSON.stringify(json_response), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
  }