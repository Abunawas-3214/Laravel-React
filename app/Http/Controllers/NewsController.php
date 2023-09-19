<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = new NewsCollection(News::orderBy('created_at', 'desc')->paginate(8));
        return Inertia::render('Homepage', [
            'news' => $news
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $news = new News();
        $news->title = $request->title;
        $news->description = $request->description;
        $news->category = $request->category;
        $news->author = auth()->user()->email;
        $news->save();
        return redirect()->back()->with('message', 'News have been added');
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        $newsData = $news::where('author', auth()->user()->email)->get();
        return Inertia::render('Dashboard', [
            'newsData' => $newsData
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        News::where('id', $request->id)->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category
        ]);
        return redirect()->back()->with('message', 'News have been updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $newsData = News::find($request->id);
        $newsData->delete();
        return redirect()->back()->with('message', 'News have been deleted');
    }
}
