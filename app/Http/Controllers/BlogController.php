<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class BlogController extends Controller
{
    private $backendlessUrl;
    private $appId;
    private $apiKey;

    public function __construct()
    {
        // Backendless configuration
        $this->appId = env('BACKENDLESS_APP_ID', 'YOUR_APP_ID');
        $this->apiKey = env('BACKENDLESS_API_KEY', 'YOUR_API_KEY');
        $this->backendlessUrl = "https://api.backendless.com/{$this->appId}/{$this->apiKey}";
    }

    /**
     * Display a listing of blog posts.
     * GET /api/blog
     */
    public function index(Request $request)
    {
        try {
            $pageSize = $request->get('pageSize', 10);
            $offset = $request->get('offset', 0);
            
            $response = Http::get("{$this->backendlessUrl}/data/BlogPost", [
                'pageSize' => $pageSize,
                'offset' => $offset,
                'sortBy' => 'created desc'
            ]);

            return response()->json([
                'success' => true,
                'data' => $response->json()
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified blog post.
     * GET /api/blog/{id}
     */
    public function show($id)
    {
        try {
            $response = Http::get("{$this->backendlessUrl}/data/BlogPost/{$id}");

            if ($response->successful()) {
                return response()->json([
                    'success' => true,
                    'data' => $response->json()
                ]);
            }

            return response()->json([
                'success' => false,
                'message' => 'Post not found'
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created blog post.
     * POST /api/blog
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'excerpt' => 'nullable|string',
            'featuredImage' => 'nullable|url',
            'category' => 'nullable|string',
            'author' => 'nullable|string',
            'published' => 'nullable|boolean',
            'slug' => 'nullable|string'
        ]);

        try {
            $response = Http::post("{$this->backendlessUrl}/data/BlogPost", $validated);

            return response()->json([
                'success' => true,
                'data' => $response->json(),
                'message' => 'Post created successfully'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified blog post.
     * PUT /api/blog/{id}
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'excerpt' => 'nullable|string',
            'featuredImage' => 'nullable|url',
            'category' => 'nullable|string',
            'author' => 'nullable|string',
            'published' => 'nullable|boolean',
            'slug' => 'nullable|string'
        ]);

        try {
            $validated['objectId'] = $id;
            $response = Http::put("{$this->backendlessUrl}/data/BlogPost", $validated);

            return response()->json([
                'success' => true,
                'data' => $response->json(),
                'message' => 'Post updated successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified blog post.
     * DELETE /api/blog/{id}
     */
    public function destroy($id)
    {
        try {
            $response = Http::delete("{$this->backendlessUrl}/data/BlogPost/{$id}");

            return response()->json([
                'success' => true,
                'message' => 'Post deleted successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Search blog posts.
     * GET /api/blog/search
     */
    public function search(Request $request)
    {
        $query = $request->get('q', '');
        
        try {
            $whereClause = "title LIKE '%{$query}%' OR content LIKE '%{$query}%'";
            
            $response = Http::get("{$this->backendlessUrl}/data/BlogPost", [
                'where' => $whereClause,
                'pageSize' => 20
            ]);

            return response()->json([
                'success' => true,
                'data' => $response->json()
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get posts by category.
     * GET /api/blog/category/{category}
     */
    public function byCategory($category)
    {
        try {
            $response = Http::get("{$this->backendlessUrl}/data/BlogPost", [
                'where' => "category = '{$category}'",
                'sortBy' => 'created desc'
            ]);

            return response()->json([
                'success' => true,
                'data' => $response->json()
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
