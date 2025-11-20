-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create the user_progress table
create table if not exists public.user_progress (
    id uuid default uuid_generate_v4() primary key,
    user_id text not null,
    lesson_id text not null,
    course_id text,
    completed_at timestamp with time zone default timezone('utc'::text, now()) not null,
    
    -- Prevent duplicate entries for the same lesson by the same user
    unique(user_id, lesson_id)
);

-- Enable Row Level Security (RLS)
alter table public.user_progress enable row level security;

-- Create Policy: Users can insert their own progress
create policy "Users can insert their own progress"
on public.user_progress for insert
with check (auth.uid()::text = user_id);

-- Create Policy: Users can view their own progress
create policy "Users can view their own progress"
on public.user_progress for select
using (auth.uid()::text = user_id);

-- Create Policy: Users can update their own progress
create policy "Users can update their own progress"
on public.user_progress for update
using (auth.uid()::text = user_id);

-- Create Policy: Users can delete their own progress (optional, but good for un-completing)
create policy "Users can delete their own progress"
on public.user_progress for delete
using (auth.uid()::text = user_id);

-- Create index for faster queries
create index if not exists user_progress_user_id_idx on public.user_progress(user_id);
