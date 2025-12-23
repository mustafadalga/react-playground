import { ComponentProps, useEffect, useState } from "react";

interface IResponseSuccess<T> {
    data: T;
    isError: false
}

interface IResponseError {
    data: null,
    isError: true,
    error: string
}

type IResponse<T> = IResponseSuccess<T> | IResponseError

type IJobIds = number[]

type IJob = {
    by: string
    id: number
    score: number
    time: number
    title: string
    type: 'job'
    url?: string
}

const limit = 6

export default function JobBoard() {
    const [ jobs, setJobs ] = useState<IJob[]>([])
    const [ jobIds, setJobIds ] = useState<IJobIds>([])
    const [ currentOffset, setCurrentOffset ] = useState<number>(0)
    const [ isLoading, setIsLoading ] = useState<boolean>(true)
    const [ error, setError ] = useState<string>("")
    const totalPage = Math.ceil(jobIds.length / limit)
    const currentPage = Math.floor(currentOffset / limit) + 1

    const loadMore = async (userOffset: number) => {
        if (isLoading) return

        setIsLoading(true)
        const newIds = getOffsetIds(userOffset, jobIds)
        setCurrentOffset(userOffset)

        if (!newIds.length) {
            setIsLoading(false)
            return;
        }

        const jobDetails = await getJobDetails(newIds)
        setIsLoading(false)

        if (jobDetails.isError) {
            setError(jobDetails.error)
        } else {
            setJobs(prevState => [ ...prevState, ...jobDetails.data ])
        }
    }

    useEffect(() => {
        const fetchIds = async () => {
            const responseJobIds = await getJobIds()
            setIsLoading(false)
            if (responseJobIds.isError) {
                setError(responseJobIds.error)
            } else {
                setJobIds(responseJobIds.data)
            }
        }
        fetchIds()
    }, [])

    useEffect(() => {
        if (jobIds.length) {
            loadMore(0)
        }
    }, [ jobIds.length ])
    return (
        <section className="grid gap-5 p-5" aria-labelledby="title">
            <h1 id="title">Job Board</h1>

            <ul className="grid gap-3">
                {jobs.map(job => <Job key={job.id} job={job}/>)}
            </ul>

            {currentPage < totalPage && jobs.length ?
                <button aria-label="Load more"
                        className="flex items-center justify-center px-4 py-2 border rounded-xl disabled:border-slate-200"
                        disabled={isLoading}
                        onClick={() => loadMore(currentOffset + limit)}>
                    {isLoading ? <Loader/> : "Load More"}
                </button> : null}

            {error.length ? <Alert message={error}/> : null}
        </section>
    );
}

function Job({ job }: { job: IJob }) {
    return <div className="border border-slate-200 rounded-md p-3 grid gap-2">
        <h3 className="text-slate-800 text-base">
            {job.url ? <a className="hover:underline" href={job.url} target="_blank"
                          rel="noopener noreferrer">{job.title}</a> : job.title}
        </h3>
        <div className="flex items-center text-xs gap-3 text-slate-500">
            <span>By {job.by}</span>
            <time>{new Date(job.time * 1000).toLocaleString()}</time>
        </div>
    </div>
}

function Alert({ message }: { message: string }) {
    return <div role="alert" className="text-sm text-red-500">{message}</div>
}

function Loader(props: ComponentProps<"div">) {
    return <div role="progressbar" aria-busy="true"
                className="size-10 rounded-full border-t border-t-blue-500 animate-spin" {...props}>
        <span className="sr-only">Loading...</span>
    </div>
}

function getOffsetIds(offset: number, ids: IJobIds) {
    const end = offset + limit
    return ids.slice(offset, end)
}

async function getJobIds(): Promise<IResponse<IJobIds>> {
    try {
        const response = await fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
        const data: IJobIds = await response.json()
        return {
            data,
            isError: false
        }
    } catch (error) {
        return {
            data: null,
            isError: true,
            error: extractError(error, "An error occurred while fetching job ids")
        }
    }
}

async function getJobDetails(ids: IJobIds): Promise<IResponse<IJob[]>> {
    try {
        const promises = ids.map(id => getJobDetail(id))
        const data = await Promise.all(promises)

        const errorFirst = data.find(error => error.isError)
        if (errorFirst) {
            throw new Error(errorFirst.error)
        }

        return {
            data: data.map(row => row.data as IJob),
            isError: false
        }
    } catch (error) {
        return {
            data: null,
            isError: true,
            error: extractError(error, "An error occurred while fetching job details")
        }
    }
}

async function getJobDetail(id: number): Promise<IResponse<IJob>> {
    try {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        const data: IJob = await response.json()
        return {
            data,
            isError: false
        }
    } catch (error) {
        return {
            data: null,
            isError: true,
            error: extractError(error, "An error occurred while fetching job detail")
        }
    }
}

function extractError(error: unknown, customError?: string) {
    if (error instanceof Error) {
        return error.message
    }

    return customError || "An error occurred!"
}